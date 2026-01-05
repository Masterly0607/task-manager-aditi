# 📋 Task Manager Application

This is a **team-based Task Manager web application** developed as part of an academic project.  
All team members must follow the structure and rules defined in this document.

---

## 🛠 Tech Stack

- Next.js 14 (App Router)
- TypeScript
- shadcn/ui
- React Query (GET requests only)
- json-server (mock backend using db.json)
- ESLint + Prettier

---

## 🔗 API Endpoints (GET only)

- GET /tasks
- GET /tasks/:id
- GET /tasks?projectId=:id
- GET /projects
- GET /projects/:id

---

## 📂 Standard Folder Structure

> **IMPORTANT**  
> Do NOT create random folders.  
> Only create files inside your assigned folders.

```text
task-manager/
├─ app/
│  ├─ (dashboard)/
│  │  ├─ page.tsx        # Dashboard UI (cards + recent tasks)
│  │  └─ loading.tsx     # Dashboard skeleton/spinner (optional but good)
│  │
│  ├─ tasks/
│  │  ├─ page.tsx        # Tasks list + tabs/filters + search
│  │  ├─ loading.tsx     # Tasks page skeleton/spinner (required: at least 1)
│  │  ├─ [id]/
│  │  │  ├─ page.tsx     # Task detail page (edit/delete buttons UI)
│  │  │  └─ loading.tsx  # Task detail loading state
│  │  └─ new/
│  │     └─ page.tsx     # Create task page (UI only, no POST)
│  │
│  ├─ projects/
│  │  ├─ page.tsx        # Projects list (cards + progress)
│  │  ├─ loading.tsx     # Projects loading state
│  │  └─ [id]/
│  │     ├─ page.tsx     # Project detail (stats + tasks by project)
│  │     └─ loading.tsx  # Project detail loading
│  │
│  ├─ layout.tsx         # Root layout: Sidebar + Providers wrapper
│  ├─ globals.css        # Tailwind + global styles
│  └─ not-found.tsx      # Optional: 404 UI (nice to have)
│
├─ components/
│  ├─ layout/
│  │  ├─ sidebar.tsx     # Sidebar nav (Dashboard/Tasks/Projects)
│  │  ├─ nav-item.tsx    # Sidebar item (active state)
│  │  └─ user-card.tsx   # Bottom user profile card
│  │
│  ├─ common/
│  │  ├─ page-header.tsx # Title + right actions (New Task, Edit/Delete)
│  │  ├─ loader.tsx      # Spinner component (reuse)
│  │  ├─ empty-state.tsx # Reusable empty list UI
│  │  ├─ error-state.tsx # Reusable error UI (required by teacher)
│  │  └─ confirm-dialog.tsx # Confirm modal (UI only)
│  │
│  ├─ tasks/
│  │  ├─ task-list.tsx
│  │  ├─ task-row.tsx
│  │  ├─ task-filters.tsx
│  │  ├─ task-status-badge.tsx
│  │  ├─ task-priority-badge.tsx
│  │  ├─ task-detail-card.tsx
│  │  ├─ subtasks-card.tsx
│  │  └─ comments-card.tsx
│  │
│  ├─ projects/
│  │  ├─ project-card.tsx
│  │  ├─ project-progress.tsx
│  │  ├─ project-detail-header.tsx
│  │  └─ project-tasks-table.tsx
│  │
│  └─ ui/                # shadcn/ui generated components
│
├─ features/
│  ├─ tasks/
│  │  ├─ types.ts
│  │  ├─ api.ts
│  │  ├─ hooks.ts
│  │  └─ query-keys.ts
│  │
│  ├─ projects/
│  │  ├─ types.ts
│  │  ├─ api.ts
│  │  ├─ hooks.ts
│  │  └─ query-keys.ts
│
├─ lib/
│  ├─ api-client.ts
│  ├─ query-client.ts
│  └─ utils.ts
│
├─ providers/
│  ├─ react-query-provider.tsx
│  └─ theme-provider.tsx
│
├─ constants/
│  ├─ routes.ts
│  └─ statuses.ts
│
├─ public/
│
├─ db.json               # Mock data (json-server)
├─ .env.local            # NEXT_PUBLIC_API_BASE_URL
├─ package.json
└─ README.md
```

---

## 🧑‍💻 Git & GitHub Instructions (For All Team Members)

> ⚠️ Follow these steps strictly to avoid conflicts and lost code.

---

### ✅ 1. Clone the Repository (Only Once)

```bash
git clone <repo-url>
cd task-manager
```

---

### ✅ 2. Switch to `dev` Branch

```bash
git checkout dev
git pull origin dev
```

> ❗ Never work directly on `main` or `dev`.

---

### ✅ 3. Create Your Own Feature Branch

```bash
git checkout -b feat/your-feature-name
```

**Examples**

```bash
git checkout -b feat/tasks-page
git checkout -b feat/project-detail
```

---

### ✅ 4. Work Only in Your Assigned Folders

- Do NOT edit other teammates’ folders
- Follow the folder structure strictly
- Make small, frequent commits

---

### ✅ 5. Check File Status

```bash
git status
```

---

### ✅ 6. Add & Commit Changes

```bash
git add .
git commit -m "feat: implement tasks list UI"
```

**Commit Message Rules**

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes

---

### ✅ 7. Push Your Branch to GitHub

```bash
git push origin feat/your-feature-name
```

❌ Do NOT push to `main`  
❌ Do NOT push to `dev`

---

### ✅ 8. Create a Pull Request (Required)

1. Open the repository on GitHub
2. Click **Compare & Pull Request**
3. Base branch: `dev`
4. Add:
   - Clear description
   - Screenshots (required)
5. Submit PR

---

### 🔄 When `dev` Branch Is Updated

```bash
git checkout dev
git pull origin dev
git checkout feat/your-feature-name
git merge dev
```

---

### 🧠 Common Git Commands

| Command             | Description           |
| ------------------- | --------------------- |
| `git status`        | Check file changes    |
| `git branch`        | List branches         |
| `git pull`          | Fetch + merge changes |
| `git fetch`         | Fetch only (no merge) |
| `git log --oneline` | View commit history   |

---

### 🚫 Common Mistakes to Avoid

- Working on `main` or `dev`
- Pushing without pulling latest `dev`
- Editing files outside assigned folders
- Large commits with unclear messages

---

### ✅ Golden Rule

> **One feature = One branch = One PR**

---

## ⚙️ Setup Instructions

1. Install dependencies

   ```bash
   npm install
   ```

2. Create environment file

   ```bash
   cp .env.example .env
   ```

3. Run mock server

   ```bash
   npm run server
   ```

   http://localhost:3001

4. Run app

   ```bash
   npm run dev
   ```

   http://localhost:3000

---

## 👥 Team Members & Responsibilities

### 👤 Reaska – Tasks Feature Owner

- Implement Tasks List page
- Implement Task Detail page (view UI)
- Build task-related UI components
- Integrate React Query hooks
- Handle loading & error states

**Folders**

- app/tasks/
- components/tasks/
- features/tasks/

---

### 👤 Heang – Projects Feature Owner

- Implement Projects List page
- Implement Project Detail page
- Build project UI components
- Integrate React Query hooks
- Display tasks by project

**Folders**

- app/projects/
- components/projects/
- features/projects/

---

### 👤 VannChhai – Dashboard

- Build dashboard UI
- Summary cards
- Recent tasks widget

**Folders**

- app/(dashboard)/

---

### 👤 Narin – Shared UI

- Common UI components
- Layout components

**Folders**

- components/common/
- components/layout/

---

### 👤 Masterly (Team Lead)

- Project structure & standards
- Global layout & providers
- API client & React Query setup
- Environment variables
- PR reviews & final integration

**Folders**

- app/layout.tsx
- providers/
- lib/
- constants/

---

## 🌿 Git Workflow Rules

- Do NOT push to main or dev
- Create a feature branch from dev
- Branch format: feat/feature-name
- One feature per PR
- PR must include screenshots

---

## 📌 Development Rules

- React Query GET only
- Use shadcn/ui
- Handle loading & error states
- Run ESLint & Prettier before PR

---
