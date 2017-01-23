# WebAPiCoreAngular2Sample

Для начала нужно установить node_modules: npm install

После - typings: npm install typings --global

Затем запустить Task Runner Explorer gulp или grunt

# package.json install dependencies

Добавить package.json с данными по умолчанию: npm init -y

Установка модулей для Angular2: 

npm install @angular/common @angular/compiler @angular/core @angular/forms @angular/http @angular/platform-browser @angular/platform-browser-dynamic @angular/router @angular/upgrade core-js reflect-metadata rxjs systemjs zone.js typings moment --save

npm install gulp gulp-clean gulp-concat gulp-less gulp-sourcemaps gulp-typescript gulp-uglify typescript grunt grunt-contrib-clean grunt-contrib-copy grunt-contrib-concat grunt-contrib-uglify grunt-contrib-watch grunt-contrib-cssmin grunt-ts --save-dev

# typings.json install dependencies

Чтобы найти .d.ts для какой-либо библиотеки, например для jquery, мы можем использовать команду: typings search jquery
Чтобы найти по имени мы можем использовать ту же команду с опцией --name: typings search --name jquery
Чтобы установить декларативные файлы библиотеки необходимо выполнить: typings install dt~jquery --global --save
По окончанию: typings install

https://apellsin.com/typescript/typescript-typings.html
