# kwikLogo
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## DESCRIPTION

Your fastest way to a 300pxx200px logo!  Whether you're a fan of trecherous triangles, the solid square, or the cuvaceous circle, kwikLogo has the shape for you!  Try it and add your logo boldly on all projects henseforth.


# TABLE OF CONTENTS

1. [Installation](#installation)
2. [Mockup](#mockup)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

# INSTALLATION
1. Download the source code from gitHub
2. Ensure nodeJS is installed
3. Ensure npm is initialized and inquirer is installed
4. Launch the terminal from the directory of the source.
5. Type and run: 
```
node index.js
```
6. Enter the answers to the prompts.
7. Look for the logo file 'logo.svg' in the examples folder.

# MOCKUP
[kwikLogo CLI Demo](https://drive.google.com/file/d/1Kkw7mI3lvlBJogxI4HLC0SvaUQs8L-qn/view?usp=sharing)

# USAGE
To use the application, ensure you follow the steps in the previous section (Installation Instructions) and run the command: node index.js

When the app launches, it prompts for information four times:
- enter the letters: at most 3 letters can be entered and these are treated as strings.  This answer is case sensitive so how you enter it is how the logo will be rendered.  If no letters are entered, the application will generate a logo with no letters.   
- enter the letter color: this prompt takes in common colors by name or, by its hexadecimal representation.  If no value is offered, or a value that cannot be interpreted is offered, then the default color rendered is 'black'.  If no letters were input, this prompt is still presented, however, the value is never used.
- enter the shape: this is a list of choices and simply use the arrow keys to navigate to the preferred choice and or, by its hexadecimal representation.  If no value is offered, or a value that cannot be interpreted is offered, then the default color rendered is 'black'. 
- enter the shape color to apply: this prompt can take common colors by name or, by its hexadecimal representation.  If no value is offered, or a value that cannot be interpreted is offered, then the default color rendered is 'black'.  

To view the output, navigate to the Examples folder in the root of the source.  The file will be named 'logo.svg'.  If a file named 'logo.svg' already exists in the folder as the application is run, the file will be overwritten with the output from the app.
  

# CONTRIBUTING
The more the merrier!  Please feel free to reach out if you have ideas on how to improve the app.


# TESTS
This application was tested with Jest test cases and these are made available under the folder 'tests'.


# LICENSE
[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)
 General Public License is a free, copyleft license for software and other kinds of works.

The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.


# QUESTIONS
Please reach me at [vasudevap](https://github.com/vasudevap) or at my email at prashant.vasudeva@gmail.com
---

