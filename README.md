## Full Stack Apps on AWS Project

- **Application name:** project starter code
- **Environment name:** projectstartercode-dev
- **Region:** us-east-1
- **URL:** http://projectstartercode-dev.us-east-1.elasticbeanstalk.com

## Endpoint URL

http://projectstartercode-dev.us-east-1.elasticbeanstalk.com

## Testing the Endpoint

### Success (200) - Valid image URL:
http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg

### Error (422) - Missing image URL:
http://projectstartercode-dev.us-east-1.elasticbeanstalk.com/filteredimage

## Screenshots

The screenshots for this project are located in the `screenshots/` folder and include:
- **imagem do navegador funcionando.png** - Browser showing the filtered image returned by the endpoint with status 200
- **painel eb.png** - Elastic Beanstalk dashboard showing the environment health status
- **servidor rodando e gatinho aparecendo no postman.png** - Local server running and filtered image displayed in Postman

## Getting Started

Clone this repo and navigate to the project folder:

```bash
cd 'project starter code'
npm i
npm start
```

Access locally at: http://localhost:8082

## License

[License](LICENSE.txt)
