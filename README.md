### PowerMax Ansible Snippets

**PowerMax Ansible Snippets** is a Visual Studio Code extension that allows you to quickly search and insert Dell EMC PowerMax Ansible snippets directly into your editor. This extension helps you automate storage management tasks by providing ready-to-use, trusted Ansible playbook examples for PowerMax arrays.

---

## Features

- Supports **PowerMax Ansible collection version 3.1.0**.
- Search for PowerMax Ansible snippets by keyword or description.
- Insert PowerMax Ansible tasks into your playbooks with a single click.
- Snippets cover common storage operations: provisioning, masking, snapshot, replication, and more.
- **Hover Suggestions**: Hover over a PowerMax module or option name to instantly view detailed documentation, including type, description, and default values. The documentation is formatted for readability and includes color-coded hints.
* **Intelligent Suggestions:**
    * **Module & Option Suggestions:** Get intelligent suggestions for module options and their values as you type.
    * **Task Examples:** Type `- name:` to get a list of all available task examples to insert directly into your editor.
* **Inline Documentation:** Hover over any PowerMax module or option to instantly view detailed documentation. The documentation is formatted for readability and includes color-coded hints, along with details on type, description, and default values.

---

## Installation

1.  Open **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3.  Search for `PowerMax Ansible Snippets`.
4.  Click **Install**.

---

## Usage

### Using Snippets via the Command Palette

1.  Open a YAML or Ansible playbook file in VS Code.
2.  Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
3.  Type and select: `PowerMax Ansible Snippets - v3.1.0`
4.  Search for a snippet by keyword or description.
5.  Select a snippet to insert it at your cursor location.

### Using Hover and Autocompletion

-   **Hover**: To view documentation for a module or option, simply move your mouse cursor over its name. A hover popup will appear with a formatted summary.
-   **Autocompletion**: As you type a module option, VS Code will suggest available options. After typing a colon (`:`) and a space, the extension will suggest valid values or templates for that option.

### Demos
 
![PowerMax Ansible Snippets - Demo1](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-powermax/refs/heads/release/3.1.0/src/resources/demo1.gif)

![PowerMax Ansible Snippets - Demo2](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-powermax/refs/heads/release/3.1.0/src/resources/demo2.gif)

![PowerMax Ansible Snippets - Demo3](https://raw.githubusercontent.com/rajeshvu/vscode-extension-ansible-powermax/refs/heads/release/3.1.0/src/resources/demo3.gif)
---

## References

- [https://galaxy.ansible.com/ui/repo/published/dellemc/powermax/](https://galaxy.ansible.com/ui/repo/published/dellemc/powermax/)
- [https://github.com/dell/ansible-powermax/](https://github.com/dell/ansible-powermax/)

---

## License

MIT License

---

## Author

Developed and maintained by [Rajesh V U](https://www.rajeshvu.com)