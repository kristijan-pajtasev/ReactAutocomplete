module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-exec');

	grunt.initConfig({
		watch: {
		    less: {
		      // We watch and compile sass files as normal but don't live reload here 
		      files: ['dev/less/*.less'],
		      tasks: ['exec:less'],
		   	},
			react: {
		      // We watch and compile sass files as normal but don't live reload here 
		      files: ['dev/react/*.js', 'dev/react/**/*.js'],
		      tasks: ['exec:jsx'],
		   	},
			webpack: {
		      // We watch and compile sass files as normal but don't live reload here 
		      files: ['dev/js/*.js', 'dev/js/**/*.js'],
		      tasks: ['exec:webpack'],
		   }

		},
		exec: {
			less: {
				cmd: function() {
					return 'lessc dev/less/style.less > public/css/style.css';
					
				}
			},
			jsx: {
				cmd: function() {
					return 'babel dev/react/ -d dev/js/';
				}
			},
			webpack: {
				cmd: function() {
					return 'webpack dev/js/main.js public/js/bundle.js';
					// return 'webpack dev/js/main.js public/js/bundle.js --optimize-minimize ';
				} 
			}
		}
	});



	// Default task(s).
	grunt.registerTask('default', ['exec:less', 'exec:jsx', 'exec:webpack', 'watch']);

};