import socket # for socket
import sys

try:
	s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
	print ("Socket successfully created")
except socket.error as err:
	print ("socket creation failed with error %s" %(err))

# default port for socket
port = 80

try:
	host_ip = socket.gethostbyname('192.168.4.1')
	
except socket.gaierror:

	# this means could not resolve the host
	print ("there was an error resolving the host")
	sys.exit()

# connecting to the server
s.connect((host_ip, port))
s.send('on'.encode())
print ("the socket has successfully connected")
