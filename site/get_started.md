You need to install RingoJs and its package manager "rp". Then download the [demo application](https://github.com/oberhamsi/ringo-virtue/archive/master.zip), unzip it anywhere and start it.

## Windows

If you are on Windows, the easiest solution is to use our setup.exe. It will configure your %PATH% and install the package manager.

The [demo application](https://github.com/oberhamsi/ringo-virtue/archive/master.zip) comes with a `start.cmd`.

## *nix

Ringo is released as a [debian package](http://ringojs.org/download) as well as [zip files](http://ringojs.org/download).
Once you have Ringo itself installed, you also need to get the package manager:

    $ ringo-admin install http://packages.ringojs.org/download/rp/latest

Inside the [demo application](https://github.com/oberhamsi/ringo-virtue/archive/master.zip) you find a `start.sh`.

## Developers

The git master of RingoJs is usually stable but keep an eye on the commits. You will need Apache Ant as well as the ivy plugin for Ant to build Ringo.

    $ git clone git://github.com/ringo/ringojs.git
    $ cd ringojs
    $ ant update
    $ ant jar

VirtueJs is just a set of package dependencies. If you want to use the git version of those packages, you should check them out somewhere and symlink them into Ringo's "packages" directory. Check the "package.json" of the demo application to see which packages you need.