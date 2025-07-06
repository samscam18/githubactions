# 🚀 Node.js App with CI/CD using GitHub Actions, Docker, and Kubernetes

This project demonstrates a complete CI/CD pipeline for a Node.js app using:

- **GitHub Actions** for automation
- **Docker** for containerization
- **Docker Hub** for image storage
- **Kubernetes (Minikube)** for deployment

---

## 🧱 Tech Stack

- **Node.js** – Web application
- **Docker** – Containerize the app
- **Kubernetes** – Deploy and manage containers
- **GitHub Actions** – CI/CD workflow automation
- **Minikube** – Local Kubernetes cluster
- **Docker Hub** – Public container registry

---

## 📁 Project Structure

.
├── Dockerfile
├── k8s/
│ ├── deployment.yaml
│ └── service.yaml
├── .github/
│ └── workflows/
│ └── main.yml
├── package.json
└── app.js
---

## ⚙️ GitHub Actions Workflow

The CI/CD pipeline runs on every push to the `main` branch.

### ✅ What It Does

1. **Checkout the code**
2. **Login to Docker Hub**
3. **Build Docker image**
4. **Push image to Docker Hub**
5. *(Optional)* Deploy to Minikube via `kubectl apply`

### 🔐 Required GitHub Secrets

| Secret Name         | Description                        |
|---------------------|------------------------------------|
| `DOCKER_USERNAME`   | Your Docker Hub username           |
| `DOCKER_PASSWORD`   | Your Docker Hub password or token  |
| `KUBE_CONFIG_DATA`  | Base64 encoded kubeconfig file 🛑 Optional (used for deploy step) |

---

## 🐳 Docker Commands (Manual)

```bash
# Build Docker image
docker build -t samscam18/node-k8s-app:latest .

# Push to Docker Hub
docker push samscam18/node-k8s-app:latest
☸️ Kubernetes Deployment (Manual)
bash
Copy
Edit
# Apply Kubernetes configs
kubectl apply -f k8s/

# Check pods
kubectl get pods

# Check service
kubectl get svc
Access the App:
bash
Copy
Edit
minikube service node-k8s-service
📦 To Base64 Encode Kubeconfig (for GitHub secret)
bash
Copy
Edit
cat $HOME/.kube/config | base64
📌 Future Improvements
Add health checks in deployment

Enable automatic deploy to cloud (e.g. GKE, EKS)

Add testing step before build

Monitor with Prometheus/Grafana

🙌 Author
Made with 💻 by Samarth Firangi
