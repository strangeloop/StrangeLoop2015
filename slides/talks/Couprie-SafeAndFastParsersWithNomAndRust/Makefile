all: slides.html reduced.html

reduced.html: reduced.md template.html style.css
	pandoc -t dzslides \
		   --template template.html \
	       -s reduced.md \
		   -o reduced.html

slides.html: slides.md template.html style.css
	pandoc -t dzslides \
		   --template template.html \
	       -s slides.md \
		   -o slides.html

slides.pdf: slides.tex
	pdflatex slides.tex

pdf: slides.md
	./node_modules/.bin/casperjs test.js
	for i in $(ls rust-n*); do convert -crop  1024x640+768x12 $i $i; done
	convert rust-n* slides.pdf

slides.tex: slides.md
	pandoc -t beamer \
		   -s slides.md \
		   -o slides.tex

style.css: style.less
	lessc style.less style.css

clean:
	-rm slides.html
	-rm slides.pdf
	-rm slides.tex
	-rm slides.log
	-rm slides.nav
	-rm slides.snm
	-rm slides.toc
	-rm slides.aux
	-rm slides.out
