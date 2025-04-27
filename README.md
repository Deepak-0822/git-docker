Q1. What is Docker?
What: Docker is a platform that uses OS-level virtualization to deliver software in packages called containers.

Why: To ensure applications run reliably in any environment (development, testing, production) without conflicts.

When: Use Docker when you want to package your app and its dependencies together for consistent deployment.

Q2. What is a Docker container?
What: A container is a lightweight, standalone, executable package of software that includes everything needed to run it.

Why: To isolate applications, ensure portability across different systems, and reduce overhead compared to traditional VMs.

When: Use containers when you need fast, consistent, and portable application deployment.

Q3. What is Docker Compose?
What: Docker Compose is a tool for defining and running multi-container Docker applications using a YAML file.

Why: To manage multi-container setups easily without writing complex docker run commands.

When: Use Docker Compose when you have multiple services (like database + backend + frontend) that need to work together.

Q4. Why is a Compose file required?
What: A Compose file defines services, networks, and volumes in a structured way.

Why: To simplify the orchestration of multi-container applications, ensure reproducibility, and manage environments efficiently.

When: Required when multiple containers must be deployed together consistently (e.g., microservices, local dev environments).

Q5. What options exist to lock containerized network settings to a system?
What: Options include Docker network drivers (bridge, host, overlay), macvlan networks, or setting custom IP ranges.

Why: To control how containers communicate internally and with external systems, and enforce network security policies.

When: Needed when you want custom network isolation, fixed IPs, or integrate containers into existing physical networks.

Q6. Can I apply rules on container network traffic via a local firewall or VPN client?
What: Yes, you can apply firewall rules (iptables on Linux, Windows Firewall) or route container traffic through VPNs.

Why: To secure, monitor, or restrict traffic to/from containers, or enforce compliance.

When: When containers must comply with corporate network policies or specific security requirements.

Q7. Does running Docker Desktop for Windows with Hyper-V backend allow users to create arbitrary VMs?
What: No, Docker Desktop itself restricts VM creation to its own managed VM, but Hyper-V generally allows users to create VMs.

Why: Hyper-V provides virtualization capabilities; Docker uses it under the hood but doesn’t expose VM creation interfaces.

When: If users have Hyper-V Manager access outside Docker, they could manually create VMs — otherwise, Docker alone doesn't allow it.

Q8. Can I prevent users from creating other VMs when using Docker Desktop on Mac?
What: Yes, but it's tricky. Docker Desktop uses Apple Hypervisor Framework internally, not full hypervisor control like Hyper-V.

Why: Mac security settings and user permissions limit direct VM creation independently of Docker.

When: Needed in high-security environments where you don't want users creating VMs beyond Docker containers.

Q9. How does Docker Desktop achieve network-level isolation with Hyper-V and/or WSL2?
What: Docker Desktop sets up an internal virtual network using Hyper-V virtual switches or WSL2 networking.

Why: To isolate container traffic from the host and control communication paths securely.

When: Used whenever Docker Desktop is installed on Windows/Mac to ensure containers don't interfere directly with host networks.

Q10. What is the difference between docker compose and docker-compose?
What:

docker-compose (hyphen) is the old standalone CLI tool.

docker compose (space) is the new plugin integrated into the Docker CLI.

Why: Docker moved Compose into the main CLI (docker) for better integration and consistent UX.

When: Use docker compose if you're using Docker 20.10+; otherwise, older installations still use docker-compose.

Q11. What's the difference between up, run, and start?
What:

up: Creates and starts containers.

run: Starts a one-off command in a new container.

start: Starts an existing, stopped container.

Why: Different commands for different lifecycle operations: full environment (up), quick tests (run), restart (start).

When:

Use up for long-term service deployment.

Use run for temporary tasks.

Use start to revive stopped containers.

Q12. How do I run multiple copies of a Compose file on the same host?
What: Use different --project-name (or -p) flags or duplicate Compose files with different configurations.

Why: To avoid container, network, and volume naming collisions.

When: When you need multiple instances (e.g., dev1, dev2) running from the same Compose setup.

Q13. What is a Dockerfile?
What: A Dockerfile is a text file with instructions to build a Docker image.

Why: It automates the process of creating containers with specific software and configurations.

When: Every time you need a custom container image (your app, your configs).

Q14. What are the basic instructions in a Dockerfile?
What: Key instructions include FROM, COPY, RUN, CMD, ENTRYPOINT, ENV, EXPOSE.

Why: Each instruction defines a step in building the container (base image, copying files, installing packages, setting startup commands).

When: Used while creating Dockerfiles for your applications or services.

Q15. How do I optimize a Dockerfile?
What: Reduce image size, minimize layers, leverage caching, use small base images (like Alpine).

Why: Faster builds, smaller images, better security, quicker deployments.

When: Always optimize production Dockerfiles to reduce attack surface and speed up CI/CD pipelines.

Q16. What are multi-stage builds?
What: A method to use multiple FROM statements in a Dockerfile to separate build and runtime environments.

Why: To keep final images clean by copying only necessary artifacts, avoiding build dependencies in production.

When: When you need to compile code (e.g., Java, Go, Node.js) and only ship binaries without build tools.

Q17. How can I troubleshoot common Dockerfile errors?
What: Common methods: check Docker build logs, run intermediate containers interactively, use docker history.

Why: Errors often happen due to missing files, wrong paths, permission issues, or syntax mistakes.

When: Whenever your docker build fails or results in unexpected behavior.

Q18. What are best practices for security in Dockerfiles?
What:

Use official minimal base images.

Avoid running as root inside containers.

Scan images for vulnerabilities.

Minimize layers and installed packages.

Why: Reduces attack surfaces, minimizes vulnerabilities, improves container hardening.

When: Always apply security best practices, especially for production workloads.

Q19. How do I set environment variables in a Dockerfile?
What: Using ENV instruction.

Why: To set configuration values available at container runtime.

When: When your application needs dynamic settings like database URLs, API keys, ports.

Example:

ENV APP_ENV=production
Q20. What is the difference between CMD and ENTRYPOINT?
What:

CMD: Provides default arguments for the container.

ENTRYPOINT: Defines the main command to run.

Why: To control how containers start; ENTRYPOINT is preferred for fixed behavior; CMD is good for flexible default behavior.

When:

Use ENTRYPOINT for fixed service containers.

Use CMD when users might override command behavior.

Q21. What are common mistakes in Dockerfiles?
What:

Installing unnecessary packages.

Using large base images.

Not pinning versions.

Leaving secrets inside images.

Why: Causes large images, slower builds, security risks, and unpredictable behavior.

When: Watch out for these mistakes especially during production image creation.

Q22. What are best practices for Docker overall?
What:

Keep images small.

Use multi-stage builds.

Always scan images.

Prefer volumes over putting data inside containers.

Follow least privilege principles (non-root user).

Why: For faster deployment, better security, lower costs, and easier management.

When: Always — from development through production environments.
