---
sidebar_position: 1
---

# Kubernetes

## Resources

* [Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours] | TechWorld with Nana](https://www.youtube.com/watch?v=X48VuDVv0do)
* [kubectl Cheat Sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/)


## kubectl and minikube

* Kubectl: https://kubernetes.io/docs/tasks/tools/
* Minikube: https://minikube.sigs.k8s.io/docs/
* Kubectx/Kubens: https://github.com/ahmetb/kubectx
* Kubernetes Dashboard: https://github.com/kubernetes/dashboard
* Helm: https://helm.sh/


### Commands

```bash
# get nodes
kubectl get nodes

# output
NAME       STATUS   ROLES                  AGE   VERSION
minikube   Ready    control-plane,master   56s   v1.22.3
```

```bash
# minikube status
minikube status

# output
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

```bash
# create an nginx deployment
kubectl create deployment nginx-depl --image=nginx

# output
deployment.apps/nginx-depl created
```

```bash
# list deployments
kubectl get deployment

# output
NAME         READY   UP-TO-DATE   AVAILABLE   AGE
nginx-depl   1/1     1            1           102s
```

```bash
# get pods
kubectl get pod

# output
NAME                          READY   STATUS    RESTARTS   AGE
nginx-depl-5c8bf76b5b-95vpw   1/1     Running   0          2m41s
```

```bash
# get replicaset
kubectl get replicaset

# output
NAME                    DESIRED   CURRENT   READY   AGE
nginx-depl-5c8bf76b5b   1         1         1       4m15s
```

```bash
# edit a deployment
kubectl edit deployment nginx-depl

# output
# > text editor for the deployment
```

```bash
# get logs
kubectl logs nginx-depl-7fc44fc5d4-45h68

# output
# > pod container logs
```

```bash
# get terminal inside a pod container
kubectl exec -it nginx-depl-7fc44fc5d4-45h68 -- bin/bash

# output
root@nginx-depl-7fc44fc5d4-45h68:/#
```

```bash
# delete deployment
kubectl delete deployment nginx-depl

# output
deployment.apps "nginx-depl" deleted
```

```bash
# apply config file
kubectl apply -f nginx-deployment.yaml

# output
deployment.apps/nginx-deployment created
```

```bash
# delete all
kubectl delete all --all --all-namespaces

# output
pod "coredns-78fcd69978-rv4jb" deleted
pod "etcd-minikube" deleted
pod "kube-apiserver-minikube" deleted
pod "kube-controller-manager-minikube" deleted
pod "kube-proxy-hpzz4" deleted
pod "kube-scheduler-minikube" deleted
pod "storage-provisioner" deleted
service "kubernetes" deleted
service "kube-dns" deleted
daemonset.apps "kube-proxy" deleted
deployment.apps "coredns" deleted
replicaset.apps "coredns-78fcd69978" deleted
```

```bash
# stop local cluster
minikube stop

# output
✋  Stopping node "minikube"  ...
🛑  1 node stopped.
```

```bash
# deletes a local Kubernetes cluster
# deletes a local Kubernetes cluster. This command deletes the VM, and removes all associated files.
# https://minikube.sigs.k8s.io/docs/commands/delete/
minikube delete --all --purge

# output
🔥  Deleting "minikube" in virtualbox ...
💀  Removed all traces of the "minikube" cluster.
🔥  Successfully deleted all profiles
💀  Successfully purged minikube directory located at - [/Users/ben-hurott/.minikube]
```

```yaml
# get deployment status as yaml
kubectl get deployment nginx-deployment -o yaml

# output
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    deployment.kubernetes.io/revision: "2"
    kubectl.kubernetes.io/last-applied-configuration: |
      {"apiVersion":"apps/v1","kind":"Deployment","metadata":{"annotations":{},"labels":{"app":"nginx"},"name":"nginx-deployment","namespace":"default"},"spec":{"replicas":2,"selector":{"matchLabels":{"app":"nginx"}},"template":{"metadata":{"labels":{"app":"nginx"}},"spec":{"containers":[{"image":"nginx:1.16","name":"nginx","ports":[{"containerPort":8080}]}]}}}}
  creationTimestamp: "2022-01-07T20:32:16Z"
  generation: 3
  labels:
    app: nginx
  name: nginx-deployment
  namespace: default
  resourceVersion: "732"
  uid: 68ce242a-040f-4480-891c-f8239138d761
spec:
  progressDeadlineSeconds: 600
  replicas: 2
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: nginx
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: nginx
    spec:
      containers:
      - image: nginx:1.16
        imagePullPolicy: IfNotPresent
        name: nginx
        ports:
        - containerPort: 8080
          protocol: TCP
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status:
  availableReplicas: 2
  conditions:
  - lastTransitionTime: "2022-01-07T20:32:16Z"
    lastUpdateTime: "2022-01-07T20:33:49Z"
    message: ReplicaSet "nginx-deployment-f4b7bbcbc" has successfully progressed.
    reason: NewReplicaSetAvailable
    status: "True"
    type: Progressing
  - lastTransitionTime: "2022-01-07T20:35:55Z"
    lastUpdateTime: "2022-01-07T20:35:55Z"
    message: Deployment has minimum availability.
    reason: MinimumReplicasAvailable
    status: "True"
    type: Available
  observedGeneration: 3
  readyReplicas: 2
  replicas: 2
  updatedReplicas: 2
```


```bash
# open LoadBalancer service in browser
minikube service mongo-express-service

# output
|-----------|-----------------------|-------------|-----------------------------|
| NAMESPACE |         NAME          | TARGET PORT |             URL             |
|-----------|-----------------------|-------------|-----------------------------|
| default   | mongo-express-service |        8081 | http://192.168.59.101:30000 |
|-----------|-----------------------|-------------|-----------------------------|
🎉  Opening service default/mongo-express-service in default browser...
```


```bash
# enable ingress in minikube
minikube addons enable ingress

# output
➜ minikube addons enable ingress
    ▪ Using image k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1
    ▪ Using image k8s.gcr.io/ingress-nginx/controller:v1.0.4
    ▪ Using image k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1
🔎  Verifying ingress addon...
🌟  The 'ingress' addon is enabled
```

## Configuration Files Samples

### Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec: # spec for deployment
  replicas: 1
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec: # spec for a pod
      containers:
      - name: nginx
        image: nginx:1.16
        ports:
        - containerPort: 80
```

### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
```