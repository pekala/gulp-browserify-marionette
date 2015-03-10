var dest = './dist';
var src = './src';

module.exports = {
    sass: {
        src: src + '/styles/**/*.scss',
        dest: dest
    },
    images: {
        src: src + '/img/**',
        dest: dest + '/images'
    },
    browserify: {
        // A separate bundle could be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: [src + '/js/marionette_shim.js', src + '/js/index.js'],
            dest: dest,
            outputName: 'admin_bundle.js',
            external: ['jquery']
        }]
    },
    production: {
        cssSrc: dest + '/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
};