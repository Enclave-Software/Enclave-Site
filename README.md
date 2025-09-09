# 🔒 Enclave Messenger

**Secure • Private • Encrypted**

A modern, secure messaging application with end-to-end encryption, designed for privacy-conscious users who need reliable communication over various networks.

## ✨ Features

- 🔐 **Advanced Encryption**: Hybrid encryption (RSA-2048 + AES-GCM) with forward secrecy
- 🌐 **Network Flexibility**: Works on LAN, WAN, MAN, and offline networks
- 💾 **Persistent Storage**: Local SQLite database for message history
- 🎭 **Easter Eggs**: Hidden features and interactive commands
- 📱 **Multi-Platform**: GUI, CLI, and Web interfaces
- 🛡️ **No Central Server**: Peer-to-peer architecture
- 🔍 **Open Source**: Transparent and auditable code

## 🚀 Quick Start

### 1. Installation

```bash
# Clone or download the project files
# Run the setup script
python setup.py
```

### 2. Start Messaging

**GUI Mode (Recommended):**
```bash
python enclave_messenger_gui.py
```

**CLI Mode:**
```bash
# Server mode
python enclave_messenger_cli.py alice

# Client mode  
python enclave_messenger_cli.py bob --host 192.168.1.100
```

**Web Mode:**
```bash
python enclave_messenger_web.py
# Open http://localhost:5000
```

## 🔧 Usage Guide

### GUI Application

1. **Launch**: Run `enclave_messenger_gui.py`
2. **Setup**: Enter username and choose server/client mode
3. **Connect**: Server mode listens for connections, client mode connects to server
4. **Exchange Keys**: Use "🔑 Exchange Keys" to establish secure communication
5. **Chat**: Send encrypted messages with confidence!

### CLI Application

```bash
# Start as server
python enclave_messenger_cli.py alice

# Connect as client
python enclave_messenger_cli.py bob --host 192.168.1.100 --port 12345

# Commands
/help              # Show help
/contacts          # List contacts  
/msg alice Hello   # Send encrypted message
/key-exchange      # Exchange public keys
/history alice     # View conversation
/stats             # Show statistics
```

### Easter Eggs & Commands

Try these fun commands in any interface:
- `/joke` - Random programming jokes
- `/ascii` - ASCII art
- `/boom` - Emoji explosion  
- `/matrix` - Enter the Matrix
- `/konami` - Konami code sequence (GUI only)

## 🔐 Security Features

### Encryption Stack
- **Asymmetric**: RSA-2048 for key exchange
- **Symmetric**: AES-256-GCM for message encryption  
- **Forward Secrecy**: New session keys for each message
- **Integrity**: AEAD encryption with authentication

### Privacy Protection
- **No Metadata Leakage**: Minimal data exposure
- **Local Storage**: All data stored locally
- **No Central Server**: Direct peer-to-peer communication
- **Open Source**: Full transparency and auditability

## 📋 Requirements

- Python 3.8+
- Required packages (installed automatically):
  - cryptography
  - tkinter (for GUI)
  - flask & flask-socketio (for web)
  - sqlite3 (built-in)

## 🌐 Network Configuration

### Firewall Settings
Make sure to allow the application through your firewall:
- **Default Port**: 12345 (configurable)
- **Protocol**: TCP
- **Direction**: Inbound (for server mode)

### Network Types
- **LAN**: Direct connection within local network
- **WAN**: Connection over internet (port forwarding may be required)
- **VPN**: Works seamlessly over VPN connections
- **Offline**: Can work in air-gapped environments

## 🛠️ Development

### Project Structure
```
enclave-messenger/
├── secure_messenger.py      # Core encryption module
├── enclave_messenger_gui.py  # GUI application
├── enclave_messenger_cli.py  # CLI application  
├── enclave_messenger_web.py  # Web application
├── setup.py                 # Setup script
├── requirements.txt         # Dependencies
└── enclave_data/           # Local data directory
    ├── username_keys.json  # User keys
    └── enclave.db         # Message database
```

### Security Implementation
- **Key Generation**: Cryptographically secure random key generation
- **Key Storage**: Local encrypted key storage
- **Message Encryption**: Each message uses unique session key
- **Database**: SQLite with encrypted message storage
- **Network**: Secure socket communication

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the GPL-3.0 License - see the LICENSE file for details.

## 🆘 Support

- **Documentation**: Check the built-in `/help` command
- **Issues**: Report bugs and request features on GitHub
- **Community**: Join our discussions for help and updates

## 🎯 Roadmap

### Planned Features
- [ ] SMS integration
- [ ] Android/iOS mobile apps
- [ ] Plugin architecture
- [ ] Multi-language support
- [ ] File transfer capability
- [ ] Video/voice calling
- [ ] Blockchain integration
- [ ] IPFS storage option

### Current Status
- [x] Core encryption implementation
- [x] GUI application
- [x] CLI application  
- [x] Web application
- [x] Cross-platform support
- [x] Easter eggs and features

## 👨‍💻 Made By

**Enclave Messenger** - Bringing the original vision to reality

Original concept by **chinglen2080** from Pune, Maharashtra and **ProPoswal** from Haryana.

*Made in India with ❤️ for secure communication*

---

**"Privacy is not something that I'm merely entitled to, it's an absolute prerequisite."** - Marlon Brando

🔒 **Your messages. Your keys. Your privacy.**
