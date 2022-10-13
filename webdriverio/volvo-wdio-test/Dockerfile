FROM node:18.7.0
ENV DEBIAN_FRONTEND noninteractive

#INSTALL DEPENDENCIES
RUN apt-get update && \
  apt-get install --no-install-recommends -y \
  libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential \
  libgtk2.0-0 \
  libgtk-3-0 \
  libnotify-dev \
  libgconf-2-4 \
  libgbm-dev \
  libnss3 \
  libxss1 \
  libasound2 \
  libxtst6 \
  xauth \
  xvfb \
  ffmpeg \
  fonts-arphic-bkai00mp \
  fonts-arphic-bsmi00lp \
  fonts-arphic-gbsn00lp \
  fonts-arphic-gkai00mp \
  fonts-arphic-ukai \
  fonts-arphic-uming \
  ttf-wqy-zenhei \
  ttf-wqy-microhei \
  xfonts-wqy \
  && rm -rf /var/lib/apt/lists/*

# INSTALL NPM
RUN npm install -g npm@latest

# Node libraries
RUN node -p process.versions

# Install OpenJDK-11
RUN apt-get update && \
  apt-get install -y openjdk-11-jre-headless && \
  apt-get clean;

# INSTALL CHROME
RUN apt-get update
ARG CHROME_VERSION=104.0.5112.79-1
RUN wget -O /usr/src/google-chrome-stable_current_amd64.deb "http://dl.google.com/linux/chrome/deb/pool/main/g/google-chrome-stable/google-chrome-stable_${CHROME_VERSION}_amd64.deb" \
  && dpkg -i /usr/src/google-chrome-stable_current_amd64.deb ;  apt-get install -f -y \
  && rm -f /usr/src/google-chrome-stable_current_amd64.deb

# INSTALL FIREFOX
ARG FIREFOX_VERSION=103.0
RUN wget --no-verbose -O /tmp/firefox.tar.bz2 https://download-installer.cdn.mozilla.net/pub/firefox/releases/$FIREFOX_VERSION/linux-x86_64/en-US/firefox-$FIREFOX_VERSION.tar.bz2 \
  && tar -C /opt -xjf /tmp/firefox.tar.bz2 \
  && rm /tmp/firefox.tar.bz2 \
  && ln -fs /opt/firefox/firefox /usr/bin/firefox


# INSTALL PACKAGES
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 4444
RUN npm install


CMD xvfb-run npm run test && npm run report:generate