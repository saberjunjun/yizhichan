module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //压缩js
        uglify: {
            build: {
                src: 'src/*.js',
                dest: 'build/index.min.js'
            }
        }
    });
    // 加载任务插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify']);

};