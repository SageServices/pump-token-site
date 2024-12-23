import { useCallback } from 'react';
import { MatrixDrawProps } from './types';
import { MATRIX_CONFIG } from './config';

export const useMatrixDraw = () => {
  return useCallback((ctx: CanvasRenderingContext2D, drops: number[]) => {
    ctx.fillStyle = `rgba(0, 0, 0, ${MATRIX_CONFIG.fadeSpeed})`;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    gradient.addColorStop(0, '#60a5fa');
    gradient.addColorStop(1, '#fb923c');
    
    ctx.fillStyle = gradient;
    ctx.font = `${MATRIX_CONFIG.fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      const text = MATRIX_CONFIG.chars[Math.floor(Math.random() * MATRIX_CONFIG.chars.length)];
      const x = i * MATRIX_CONFIG.fontSize;
      const y = drops[i] * MATRIX_CONFIG.fontSize;
      
      ctx.shadowColor = '#60a5fa';
      ctx.shadowBlur = 5;
      ctx.fillText(text, x, y);
      ctx.shadowBlur = 0;
      
      if (y > ctx.canvas.height && Math.random() > MATRIX_CONFIG.dropChance) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }, []);
};

export default function MatrixCanvas({ canvasRef }: MatrixDrawProps) {
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-40"
      style={{ zIndex: 1 }}
    />
  );
}