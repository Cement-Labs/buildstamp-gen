# [Buildstamp Generator](https://cement-labs.github.io/buildstamp-gen/)

This project provides a simple interface to generate and parse (working in progress) buildstamps used by Cement Labs and related organizations/people.

## Generator Interface

### Project Information

- Belonging (e.g., `CL` for **Cement Labs**)
- Vendor (e.g., `G` for **GitHub**)
- Development status (e.g., `D` for **Development**)
- Project serial (e.g., `1` for **the first project under the same belonging**)

### Build Date

- `YYMMDD` coded (e.g., `260101` for **Jan 1, 2026**)

### Release and Versioning

- Release status (e.g., `A` for **alpha**)
- Release usage (e.g., `P` for **public release**)
- Major, minor and patch versions (e.g., `1` `1` `a`)

### Output

`CLGD1260101A1P1a`, with interactive and intuitive leader lines pointing to unabbreviated fields.

## Parser Interface
