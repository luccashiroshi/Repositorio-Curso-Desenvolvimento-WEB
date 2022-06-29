select e.nome as Empresa, c.nome as Cidade, sede
from
    empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id and c.id = eu.cidade_id and sede