# testeBlip
Repositório para entrega do teste Blip

# Api 
curl --request POST \
  --url https://apigithub-8a025306091e.herokuapp.com/api/repos \
  --header 'Content-Type: application/json' \
  --data '{
    "username":"takenet",
    "sort": "created",
    "direction": "asc",
    "perPage": "5",
    "page": "1"
}
'
# Principais aprendizados:

1. Gostei bastante de utilizar a plataforma Blip, primeira vez utilizando e minha principal impressão foi: seu modelo é bem visual e bem intuitivo para clientes que possuem ou não conhecimento técnico.

2. Tentei realizar o deploy da api para o cloud da Heroku, foi minha primeira vez utilizando e cloud e achei bem interessante.

# Principais dificuldades encontradas:

1. Tive erros envolvendo a construção do Carrossel de maneira dinâmica na busca do repositório, a api retornou corretamente e consegui resgatar seus valores, porém o erro ocorreu com renderização do menu que não ocorreu.

2. Direcionamentos utilizando regexp, tentei utilizar a seguinte maneira, transformar a opção em "text/plain" e resgatar através da condição de saída - Resposta do usuário - Condição: Corresponde à regex, valor: "/taka\.be|be/i"

3. Não localizei a maneira de redirecionar para pesquisa ou finalização no builder.

# Considerações finais:

Estou imensamente grato pela oportunidade de passar por esse teste, caso o prosseguimento do processo seletivo não ocorra, gostaria de ter meus pontos de dúvidas sanados nessas dificuldades. Obrigado pela atenção e novamente pela oportunidade.