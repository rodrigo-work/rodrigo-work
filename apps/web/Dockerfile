# Use node:22-alpine as base image
FROM node:22-alpine

# Install pnpm globally
RUN npm install -g pnpm@latest

# Create a user to avoid permission issues
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs nextjs

# Set working directory
WORKDIR /app

# Copy the project files into the container (excluding node_modules)
COPY . .

RUN [ "pnpm", "-v" ]

# Give ownership of /app to nextjs user
RUN chown -R nextjs:nodejs /app

# Switch to nextjs user for proper permissions
USER nextjs

# Install dependencies with pnpm
RUN pnpm install --no-frozen-lockfile

# Expose port (replace with the port your app is using)
EXPOSE 3000

# Run the development server
CMD ["pnpm",  "--filter=web", "dev"]
