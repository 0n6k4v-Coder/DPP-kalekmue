# Command

Bash is a command language interpreter that executes commands read from the standard input, from a string, or from a file.

## Directory Commands

```bash
mkdir
cd
pwd
```

## File Commands

```bash
echo "" > file_path
```

Note: `echo "" > file_path` creates the file if it does not exist or overwrites an existing file. It writes a newline; to create or truncate a file to zero bytes, use `> file_path` or `: > file_path`.

## Execute a Bash Script

To execute a file named `midLS` that contains `ls`:

```bash
bash midLS
```

To execute it directly:

1. Add a Bash shebang at the top of `midLS`:

   ```bash
   #!/bin/bash
   ls
   ```

2. Make the file executable:

   ```bash
   chmod +x midLS
   ```

3. Run the file:

   ```bash
   ./midLS
   ```
