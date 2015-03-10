var dest = './public';
var src = './resources';

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
            entries: src + '/js/index.js',
            dest: dest,
            outputName: 'login_bundle.js',
            external: ['jquery']
        }]
    },
    production: {
        cssSrc: dest + '/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
};
