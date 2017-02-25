/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            pictures: {
                options: {
                    engine: 'im',
                    sizes: [{
                      name: 'tiny',
                        width: 375,
                        quality: 50,
                    }, {
                        name: 'small',
                        width: 768,
                        quality: 50
                    }, {
                        name: 'medium',
                        width: 992,
                        quality: 50
                    }, {
                        name: 'large',
                        width: 1200,
                        quality: 40
                    }, {
                        name: "large",
                        width: 2400,
                        suffix: "_x2",
                        quality: 20
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/',
                    dest: 'images/'
                }]
            },
            icons: {
                options: {
                    engine: 'im',
                    sizes: [{
                      name: '375',
                        width: 375,
                        height:375,
                        aspectRatio: false,
                        quality: 50,
                    }, {
                      name: '187',
                        width: 187,
                        height:187,
                        aspectRatio: false,
                        quality: 50,
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'images_src/icons',
                    dest: 'images/icons'
                }]
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'images/'
                }]
            },
        },
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
