alter table empresas modify cnpj varchar(14)

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 95694186000123),
    ('Vale', 25914186009893),
    ('Cielo', 32894486782123);

desc empresas;

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);