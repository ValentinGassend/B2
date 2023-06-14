from webserver import WebServer
import multiprocessing

myWeb = WebServer('192.168.1.16', 3000)
server_process = multiprocessing.Process(target=myWeb.start)
server_process.start()