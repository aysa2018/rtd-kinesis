# Configuration file for the Sphinx documentation builder.

# -- Project information
import os
import sys
sys.path.insert(0, os.path.abspath('../..'))

import json

project = 'Lumache'
copyright = '2021, Graziella'
author = 'Graziella'

release = '0.1'
version = '0.1.0'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates']

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'

# -- Options for EPUB output
epub_show_urls = 'footnote'

html_static_path = ['_static']

html_css_files = [
    'custom.css',
]

html_js_files = [
    'custom.js',
]



def setup(app):
    app.add_css_file('custom.css')
    app.add_js_file('custom.js')

    app.add_config_value('equipment_data', {}, 'env')

    here = os.path.abspath(os.path.dirname(__file__))
    json_path = os.path.join(here, '_static', 'data', 'equipment.json')

    with open(json_path) as f:
        app.config.equipment_data = json.load(f)