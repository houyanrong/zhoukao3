var gulp = require('gulp');
var server = require('gulp-webserver');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8088,
            open: true,
            middleware: function(req, res, next) {
                if (/\/api/g.test(req.url)) {
                    res.end(JSON.stringify(data));
                }
                next();
            }
        }));
})