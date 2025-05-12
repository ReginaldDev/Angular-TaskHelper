# 📚 Tarefa Helper — App de Ajuda com Tarefas Escolares

Bem-vindo ao **Tarefa Helper**!  
Este é um aplicativo web que utiliza **Inteligência Artificial** para te ajudar a responder dúvidas de tarefas escolares de forma rápida e simples.

🌐 **Acesse o app agora**: [https://angular-task-helper.vercel.app/](https://angular-task-helper.vercel.app/)  


---

## 🖥️ Tecnologias utilizadas

- **Angular** (Standalone App)
- **HTML5** / **CSS3**
- **TypeScript**
- **API Google Gemini** (IA para geração de conteúdo)
- **Hospedagem Vercel**

---

## 🚀 Como rodar o projeto localmente

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/ReginaldDev/tarefa-helper.git
cd tarefa-helper
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure sua chave da API (opcional)

O app usa a **API Gemini** para gerar respostas.  
Crie um arquivo de ambiente:

```
src/environments/environments.ts
```

Com o conteúdo:

```typescript
export const environment = {
  geminiApiKey: 'SUA_CHAVE_DA_API_AQUI'
};
```

*(Se você não quiser usar IA, o app avisará que a chave não está configurada.)*

### 4️⃣ Rode o app

```bash
ng serve
```

Acesse [http://localhost:4200](http://localhost:4200)

---

## 🎨 Funcionalidades

✅ Campo de texto para digitar a pergunta  
✅ Botão para enviar a pergunta à IA  
✅ Exibição da resposta gerada  
✅ Feedback visual (Loading Spinner enquanto carrega a resposta)  
✅ Interface responsiva e moderna

---

## 🌍 Projeto hospedado

O app está disponível publicamente em:  
👉 **[https://angular-task-helper.vercel.app/](https://angular-task-helper.vercel.app/)**

Hospedagem feita com [Vercel](https://vercel.com)

---

## 🛠️ Como gerar build de produção (para deploy)

```bash
ng build --output-path dist
```

A pasta final estará em:

```
dist/tarefa-helper/
```

---

## ✍️ Autor

**Reginaldo Junior**  
[GitHub - ReginaldDev](https://github.com/ReginaldDev)

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT** — sinta-se livre para utilizar, modificar e compartilhar.