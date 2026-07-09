# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people. The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match.

## AWS Elastic Beanstalk

- **Application name:** project starter code
- **Environment name:** projectstartercode-dev2
- **Region:** us-east-1
- **URL:** http://projectstartercode-dev2.us-east-1.elasticbeanstalk.com

## Endpoint URL

http://projectstartercode-dev2.us-east-1.elasticbeanstalk.com

## Testing the Endpoint

### Success (200) - Valid image URL:
http://projectstartercode-dev2.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400

### Error (422) - Missing image URL:
http://projectstartercode-dev2.us-east-1.elasticbeanstalk.com/filteredimage

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
