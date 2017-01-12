module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');

    grunt.initConfig({
        ts: {
            base: {
                src: ['Scripts/app/boot.ts', 'Scripts/app/**/*.ts'],
                outDir: 'wwwroot/app',
                tsconfig: './tsconfig.json'
            }
        },

        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'wwwroot/app',
                    src: ['**/*.js'],
                    dest: 'wwwroot/app'
                }]
            },
            options: {
                sourceMap: true
            }
        },

        copy: {
            main: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'Scripts/js/**/*.js',
                        'node_modules/core-js/client/shim.min.js',
                        'node_modules/zone.js/dist/zone.js',
                        'node_modules/reflect-metadata/Reflect.js',
                        'node_modules/systemjs/dist/system.src.js',
                        'node_modules/typescript/lib/typescript.js',
                        'node_modules/ng2-bootstrap/bundles/ng2-bootstrap.min.js',
                        'node_modules/moment/moment.js'
                    ],
                    dest: 'wwwroot/js/',
                    filter: 'isFile'
                },
                {
                    expand: true,
                    cwd: 'node_modules/@angular/',
                    src: '**',
                    dest: 'wwwroot/js/@angular/'
                },
                {
                    expand: true,
                    cwd: 'node_modules/rxjs/',
                    src: '**',
                    dest: 'wwwroot/js/rxjs/'
                }],
            }
        },

        // Watch specified files and define what to do upon file changes
        watch: {
            scripts: {
                files: ['Scripts/**/*.js'],
                tasks: ['ts', 'uglify', 'copy']
            }
        }
    });

    // Define the default task so it will launch all other tasks
    grunt.registerTask('default', ['ts', 'uglify', 'copy', 'watch']);
};