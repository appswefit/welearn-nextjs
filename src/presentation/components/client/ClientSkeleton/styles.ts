import styled, { css } from 'styled-components';

interface SkeletonProps {
  widthPct?: number;
  heightPx?: number;
}

export const Td = styled.td<SkeletonProps>`
  ${({ theme, widthPct, heightPx }) =>
    theme &&
    css`
      background-color: ${theme.colors.DARK_100};
      height: ${heightPx ?? 300}px;
      width: ${widthPct ?? 100}%;
      border-radius: 2px;
      animation: loading 0.8s infinite alternate;

      border: none !important;

      @keyframes loading {
        0% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }
    `}
`;

export const Span = styled.span<SkeletonProps>`
  ${({ theme, heightPx, widthPct }) =>
    theme &&
    css`
      display: block;
      height: ${heightPx ?? 300}px;
      width: ${widthPct ?? 100}%;
      background-color: ${theme.colors.DARK_100};
      border-radius: 4px;
      animation: loading 0.8s infinite alternate;

      border: none !important;

      @keyframes loading {
        0% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }
    `}
`;
