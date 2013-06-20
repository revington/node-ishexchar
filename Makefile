REPORTER=dot

test:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--slow 20

test-cov: lib-cov
	@ISHEXCHAR_COV=1 $(MAKE) test REPORTER=html-cov > coverage.html && rm -rf lib-cov

lib-cov:
	@rm -rf lib-cov
	@jscoverage lib lib-cov

.PHONY: all test test-w test-cov
