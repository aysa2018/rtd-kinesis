Kinesis Lab Documentation Website
=================================

This repository contains the source code for a static website built using Sphinx and the Read the Docs theme. The site presents an overview of the Kinesis Lab, including its facilities, equipment, and research areas, with a modern, web-style interface.

Overview
--------

The website is designed to move beyond traditional documentation and provide a more interactive, visually structured experience. It includes a custom homepage with navigation cards, a toggleable sidebar, and a full-width layout.

Features
--------

- Built with Sphinx
- Read the Docs theme with custom styling
- Full-width responsive layout
- Toggleable sidebar navigation
- Custom homepage with clickable cards
- Organized content pages:
  
  - Kinesis Lab overview  
  - Equipment catalog  
  - Research areas  
  - Facilities  

Project Structure
-----------------

::

   rtd-kinesis/
   │
   ├── docs/
   │   ├── source/
   │   │   ├── index.rst
   │   │   ├── kinesis.rst
   │   │   ├── equipment.rst
   │   │   ├── research.rst
   │   │   ├── facilities.rst
   │   │   ├── conf.py
   │   │   └── _static/
   │   │       ├── custom.css
   │   │       └── custom.js
   │   │
   │   ├── build/
   │   │   └── html/
   │   │
   │   ├── Makefile
   │   └── make.bat
   │
   ├── lumache.py
   ├── pyproject.toml
   └── README.rst

Installation
------------

1. Clone the repository::

   git clone <your-repo-url>
   cd rtd-kinesis

2. Install dependencies::

   pip install -r docs/requirements.txt

If ``requirements.txt`` does not include Sphinx::

   pip install sphinx sphinx-rtd-theme

Build the Site
--------------

Navigate to the ``docs`` directory and build the HTML files::

   cd docs
   make html

The generated site will be available at::

   docs/build/html/index.html

Open it in your browser::

   open build/html/index.html

Development Workflow
--------------------

1. Edit ``.rst`` files inside::

      docs/source/

2. Modify styles in::

      docs/source/_static/custom.css

3. Modify interactivity::

      docs/source/_static/custom.js

4. Rebuild the site after changes::

      make clean
      make html

Customization
-------------

Styling
~~~~~~~

Custom styles are defined in::

   docs/source/_static/custom.css

Includes:
- Full-width layout
- Card-based homepage
- Purple theme
- Sidebar animations

JavaScript
~~~~~~~~~~

Custom behavior is handled in::

   docs/source/_static/custom.js

Includes:
- Sidebar toggle
- Layout shifting
- Card interaction effects

Pages
-----

- **Home (index.rst)**  
  Landing page with hero section and navigation cards

- **Kinesis (kinesis.rst)**  
  Overview of the lab, Arena, and Workspace

- **Equipment (equipment.rst)**  
  Categorized list of lab equipment

- **Research (research.rst)**  
  Areas of research and applications

- **Facilities (facilities.rst)**  
  Detailed breakdown of lab spaces

Notes
-----

- The sidebar is hidden by default and can be toggled using the menu button.
- Homepage cards link directly to internal pages.
- The layout is designed to resemble a modern website rather than traditional documentation.

License
-------

This project is for educational and demonstration purposes.