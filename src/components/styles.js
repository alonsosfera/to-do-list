import styled from 'styled-components';
import { flexboxColumn, flexboxRow } from '../styles/helpers';
import { BaseCss } from '../styles/base';

export const ComponentsWrapper = styled.div`
${BaseCss}
${flexboxColumn}
justify-content: center;
`;

export const H1 = styled.h1`
margin-top: 1rem;
text-align: center;
`