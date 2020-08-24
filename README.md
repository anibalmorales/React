# REACT GITHUB con deploy a github pages

### Crear un nueva carpeta para el proyecto
`$ mkdir project`

### Ingresar al dierectorio del nuevo proyecto
`$ cd project`

### Crear un nuevo proyecto en React
`$ create-react-app helloworld`

### Instalamos Gh-pages mediante este comando
`$ npm install --save-dev gh-pages`

### Abrimos el archivo package.json del proyecto y agregamos la propiedad homepage en la linea 2
`"homepage":"https://anibalmorales.github.io/react",`

### En el mismo archivo package.json agregamos los siguientes scripts:
```javascript
"scripts": {
//...
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
}
```

### agregamos el repositorio remoto
`$ git remote add origin git@github.com:anibalmorales/react.git`

### Deployamos y nuestro codigo se publiara automaticamente
`$ npm run deploy`

### commit and push your commit to GitHub. Optionally
`$ git add .`
`$ git commit -m "Your awesome message"`
`$ git push origin master`