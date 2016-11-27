var gulp = require('gulp');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
var wiredep = require('wiredep').stream;
var path = {
	javascript: ['./app/**/*.js','./app/*.js','./usejs/*.js']
};
gulp.task('run',['inject'],function(){
	nodemon({
		script : 'server.js',
		ext : 'js',
		env : {
			PORT : 8002
		},
		ignore : ['./node_modules/**']
	})
	.on('restart',function(){
		console.log('changes acknowledged');
	});
});	

gulp.task('inject',function(){
	var injectSrc = gulp.src(path.javascript,{
		read : false
	});
	return gulp.src(['./index.html'])
	.pipe(inject(injectSrc))
	.pipe(gulp.dest('./'));
});