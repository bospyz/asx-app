"use client";
import React, { useRef, useEffect } from "react";

export const WaveHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vertexSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragmentSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float ratio = u_resolution.x / u_resolution.y;
        uv.x *= ratio;

        vec3 color = vec3(0.0);
        
        // Математика создания "жидких" линий
        for(float i = 1.0; i < 5.0; i++) {
          uv.y += 0.1 * sin(uv.x * i * 1.5 + u_time * 0.5);
          float line = abs(0.002 / (uv.y - 0.5)); // Толщина линии
          
          // Цвет: глубокий синий переходящий в белый
          vec3 lineCol = mix(vec3(0.3, 0.5, 1.0), vec3(1.0), i / 5.0);
          color += lineCol * line * (1.0 / i);
        }

        gl_FragColor = vec4(color * 0.6, color.r); // Альфа-канал зависит от яркости
      }
    `;

    // Инициализация шейдеров (упрощено для краткости)
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc = gl.getUniformLocation(program, "u_resolution");

    const render = (time: number) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, time * 0.001);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};