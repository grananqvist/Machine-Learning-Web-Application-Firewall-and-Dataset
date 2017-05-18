from http.server import BaseHTTPRequestHandler,HTTPServer
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
import sys

PORT_NUMBER = 3001

def get2Grams(payload_obj):
    '''Divides a string into 2-grams
    
    Example: input - payload: "<script>"
             output- ["<s","sc","cr","ri","ip","pt","t>"]
    '''
    payload = str(payload_obj)
    ngrams = []
    for i in range(0,len(payload)-2):
        ngrams.append(payload[i:i+2])
    return ngrams



def injection_test(inputs):
    return 'MALICIOUS' if classifier.predict([inputs]).sum() > 0 else 'NOT_MALICIOUS'


#This class will handles any incoming request from
#the browser 
class myHandler(BaseHTTPRequestHandler):
	
	#Handler for the GET requests
	def do_GET(self):
		print(self.path)
		self.send_response(200)
		self.send_header('Content-type','text/html')
		self.end_headers()

		
		# Send the html message
		self.wfile.write(bytes(injection_test(self.path[1:]), "utf8"))
		return 

try:
	classifier = pickle.load( open("tfidf_2grams_randomforest.p", "rb"))
	#Create a web server and define the handler to manage the
	#incoming request
	server = HTTPServer(('', PORT_NUMBER), myHandler)
	print ('Started httpserver on port ')	
	
	#Wait forever for incoming htto requests
	server.serve_forever()

except KeyboardInterrupt:
	print ('^C received, shutting down the web server')
	server.socket.close()




