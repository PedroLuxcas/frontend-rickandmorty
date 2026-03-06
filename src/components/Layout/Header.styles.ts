import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => theme.spacing.md} 0;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const HeaderContent = styled.div`
  max-width: 1200px,
  margin: 0 auto,
  padding: 0 ${({ theme }) => theme.spacing.lg };
  display: flex;
  aling-items: center;
  justify-content: space-between;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  font-weigth: 700;

  a {
    color: ${({ theme }) => theme.colors.text.light};
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const NavLink = styled.a<{ $active?: boolean}>`
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weigth: ${({ $active }) => $active ? '600' : '400'};
  background-color: ${({ $active }) => $active ? 'rgba(255,255,255,0.2)' : 'transparent'};
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255,255,255,0.1);
  }
`;