var gulp=require("gulp");
var uglify=require("gulp-uglify");
var concat=require("gulp-concat");
var imagemin=require("gulp-imagemin");
var cssnano=require("gulp-cssnano");
var htmlmin=require("gulp-htmlmin");
var browserSync=require("browser-sync").create();
var reload=browserSync.reload;

// 启用静态服务器
gulp.task('default',['jsmin','imagemin','htmlmin','cssmin'],function () {
    browserSync.init({
        server:{
            //将dist目录作为根目录
            baseDir:"./"
        }
    });
    gulp.watch(["src/js/*.js","src/views/**/*.js","src/css/*.css","src/*.html","src/**/*.html"],["jsmin","cssmin","htmlmin","imagemin"])
});

//创建任务（压缩js） 命令gulp js
gulp.task("jsmin",function () {
    gulp
        .src(["src/js/*.js","src/views/**/*.js"])
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream:true}));
});
//图片压缩
gulp.task("imagemin",function () {
    gulp
        .src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(reload({stream:true}));
});
//html 压缩
gulp.task("htmlmin",function () {
    gulp
        .src("src/*.html")
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream:true}));
    gulp
        .src("src/views/**/*.html")
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('dist/views'))
        .pipe(reload({stream:true}));
});
//压缩CSS
gulp.task("cssmin",function () {
    gulp
        .src("src/css/*.css")
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));
});