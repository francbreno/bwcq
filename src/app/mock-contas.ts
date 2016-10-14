import { Conta } from './conta';

export const CONTAS: Conta[] = [
        {id: 1, nome: 'Moradia', descricao: 'Despesas com aluguel, condomínio, energia elétrica, etc', saldo: 1000},
        {id: 2, nome: 'Saúde', descricao: 'Despesas com plano, consultas, medicamentos, etc', saldo: 2000},
        {id: 3, nome: 'Educação', descricao: 'Despesas com cursos, livros, palestras, etc',   saldo: 900},
        {id: 4, nome: 'Compras', descricao: 'Despesas compras diversas', saldo: -350},
        {id: 5, nome: 'Automóvel', descricao: 'Despesas com combustível, seguro, manutenção, etc', saldo: 700},
        {id: 6, nome: 'Mercantil', descricao: 'Despesas com compras em supermercado', saldo: 2000},
        {id: 7, nome: 'Investimentos', descricao: 'Valores investidos em títulos, fundos, bolsa de valores, etc', saldo: 1500}
];
