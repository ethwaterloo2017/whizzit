from gsheets import Sheets
from web3 import Web3, HTTPProvider, IPCProvider

web3 = Web3(HTTPProvider('http://localhost:8545'))

sheets = Sheets.from_files('./client_secret.json','./storage.json')
s = sheets['1xKi8R1E1tlMRwxkuFxtj5o_6-0jA7tAcAkFvAGLai7E']

q_id = s.sheets[0]['H2']



