select 
regiao as 'Região',
sum(populacao) as Total
from estados
group by regiao
order by Total desc

-- Soma
select 
sum(populacao) as Total  
from estados

-- Média
select 
avg(populacao) as Media
from estados