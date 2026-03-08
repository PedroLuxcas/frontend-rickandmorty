import { css } from 'styled-components';

export const mixins = {
    flexCenter: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    flexBetween: css`
        display: flex;
        align-items: center;
        justify-between: space-between;
    `,

    flexColumn: css`
        display: flex;
        flex-direction: column;
    `,

    gridResponsive: (minWidth: string = '250px') => css`
        display: flex;
        grid-template-columns: repeat(auto-fill, minmax(${minWidth}, 1fr));
        gap: ${({ theme}) => theme.spacing.lg};
    `,

    cardHover: css`
    transition: transform ${({ theme }) => theme.transitions.normal},
                box-shadow ${({ theme }) => theme.transitions.normal};
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  `,

  truncate: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,

  absoluteFill: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
};