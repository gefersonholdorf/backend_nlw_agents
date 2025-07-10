# 🧠 NLW Agents

NLW Agents é um backend robusto e escalável desenvolvido em Node.js com TypeScript, projetado para habilitar interações inteligentes baseadas em áudio em salas virtuais. A aplicação permite que usuários façam perguntas a uma IA (Google Gemini), que responde com base no conteúdo de uma gravação de áudio principal. Ideal para contextos como aulas, podcasts, webinars e palestras.

---

## 🚀 Tecnologias e Bibliotecas Utilizadas

- **Node.js**
- **TypeScript** 
- **Fastify**
- **Drizzle ORM**
- **PostgreSQL**
- **pgvector**
- **Zod**
- **Docker**
- **Biome**
- **Gemini**

---

## ⚙️ Funcionalidades Principais

- ✅ Criação de **salas de conversa**
- ✅ Upload e transcrição automática de **áudio principal**
- ✅ Armazenamento e indexação vetorial do conteúdo transcrito
- ✅ Submissão de perguntas via texto por participantes
- ✅ Geração de resposta pela **IA Gemini** com base no conteúdo do áudio
- ✅ API performática e validada com Zod
- ✅ Totalmente containerizado com Docker
- ✅ Lint e formatação automatizados com Biome

---

## 🐳 Como Executar Localmente (Docker)

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/nlw-agents.git
cd nlw-agents

# 2. Crie e configure o arquivo .env (ver seção abaixo)
DATABASE_URL=postgres://user:password@localhost:5432/nlw_agents
GEMINI_API_KEY=seu_google_gemini_api_key
PORT=3333

# 3. Suba os containers
docker compose up -d

# 4. Execute o projeto
npm run start

