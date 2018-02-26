# Machine learning based web application firewall

Machine learning based Web Application firewall for detection attacks such as SQL injections, XSS and shell script injections. 

Course project for TDA602
Contributors: Filip Granqvist & Oskar Holmberg

Requirements:
 - Python 3.x
 - Jupyter notebook
 - Python libraries
   * Pandas
   * Numpy
   * Sklearn
   * matplotlib
   * seaborn
   * scipy
 - Node.js (to run demo server)

Follow along our development process in these notebooks:
 - 0_Data_wrangling.ipynb	(Formating other sources of payload datasets into a common format (don't step through this))
 - 1_Data_cleaning.ipynb	(Cleaning the data and output into a common .csv file)
 - 2_Data_analysis.ipynb (All analysis, training, evaluation and saving models to pickles (not recommended to step through the training section, takes a long time))
 
 To run notebooks (they can also be read from github):
 1. Install jupyter notebook
 2. type in cmd: jupyter notebook <notebookfile.ipynb>
 3. step through each part of the notebook using Ctrl+Enter or from the toolbar
 
 
 Plots_technical_background.ipynb contains junk used to create images for the report  
   
 Demo-server contains a Node.js server with our best classifier (in the form of a .pickle) implemented available for live testing  
 See README.md in demo-server for instructions on how to set up the server  
   
 images contains images used for the report
 
 data folder contains our malicious and non-malicious data. Also contains trained classifiers in form of .pickle files  
 tfidf_2grams_randomforest.p contains our single best classifier  
 trained_classifiers.p contains all our classifiers along with performance metrics. But this is not the final version, it was too big for github. Download the final version from here: https://1drv.ms/f/s!Aj1zBHCOJiQFgbQwDswBYtpzB1Pulg and replace the old one
