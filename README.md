# image_Processing
## overview 
This is an API that can be used in two different ways. The first, as a simple placeholder API that allows us to place images into our frontend with the size set via url parameters. The second use case is as a library to serve properly scaled versions of our images to the frontend to reduce page load size.

## scripts 
### download all pakages 
 > npm install 
### build project 
 > npm run build

### start production 
 > npm run start_prod
### start dev 
 > npm run start 

### test code 
 > npm run test 

### run prettier 
 > npm run format


## Endpoints

 >http://localhost:3000/api/images
### show image
 >http://localhost:3000/api/images?filename=fjord
### resize image dimension

 >  http://localhost:3000/api/images?filename=fjord&width=200&height=200


##images file in
 > assets/images
 > assets/Thumb_images
