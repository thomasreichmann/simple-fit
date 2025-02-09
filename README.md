# 🏋️ Gym Progression Tracker Overview

A **simple** and **mobile-first** gym progression tracker built with **Next.js App Router**, **Supabase Auth**, and a clean UI.

## 🎯 Core Features

1. **Exercise Tracking** – Log weight and progress for each workout.
2. **Exercise Management** – Add, edit, or remove exercises/machines.
3. **Shared Exercise Database** – A crowd-sourced list of exercises that all users can contribute to.
4. **Personal Progression** – Each user’s weight records are private.

---

## 🏗️ Tech Stack

- **Frontend:** [Next.js (App Router)](https://nextjs.org/)
- **Backend:** [TRPC](https://trpc.io/) for client-server communication
- **Database:** [Supabase](https://supabase.com/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** Supabase Auth (for private weight tracking)
- **UI & Styling:** MUI + Tailwind CSS

---

## 📌 App Structure

### 1️⃣ **Exercise Logging**

- Select an **exercise** or **machine**.
- Enter **weight lifted** + optional details (e.g., reps, difficulty).
- Save progression privately.

### 2️⃣ **Exercise/Machine Management**

- Add, edit, or remove **exercises/machines**.
- Upload an **icon** for easy identification.
- Add **tags** to improve searchability.

💡 _Machines and exercises are public & shared across all users. Only weight logs are private._

---

## 🚀 Next Steps

- [ ] Set up **Next.js App Router** project.
- [ ] Configure **Supabase Auth** for private user tracking.
- [ ] Implement **TRPC** for seamless API calls.
- [ ] Design minimal **MUI + Tailwind UI**.
- [ ] Build **exercise tracking & management** features.

---

## 🛠️ Notes & Considerations

> [!info] UX Considerations
>
> - Keep UI **mobile-first** for ease of logging workouts.
> - Ensure **fast, minimal interactions** for adding weight logs.

> [!warning] Data Privacy
>
> - Shared **exercise/machine database** means **any user can edit or delete** an entry.
> - **Weight logs are private** per user, stored in Supabase.

---

## 🔗 References

- **Next.js App Router** → [Docs](https://nextjs.org/docs/app)
- **Supabase** → [Docs](https://supabase.com/docs/)
- **TRPC** → [Docs](https://trpc.io/docs/)
- **Drizzle ORM** → [Docs](https://orm.drizzle.team/)
- **Tailwind** → [Docs](https://tailwindcss.com/docs)

---

> [!warning] Overview made by [ChatGPT](https://chatgpt.com/)
>
> This readme currently holds the overview of the project that was created by ChatGPT.
> This is a temporary reference for the project.
