# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for **changes.live** domain, designed to meet Google AdSense approval requirements. The site focuses on I Ching divination content and is optimized for SEO and AdSense compliance.

### Key Information
- **Primary Domain**: https://changes.live
- **Content Domain**: https://iching.changes.live (referenced in content but main domain is changes.live)
- **Hosting**: GitHub Pages with custom domain
- **Technology Stack**: Pure HTML, CSS, and vanilla JavaScript (no build tools)

## Architecture

### File Structure
```
├── index.html          # Main landing page (主要內容頁面)
├── privacy.html        # Privacy policy (隱私政策)
├── terms.html          # Terms of service (使用條款)
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality (mobile nav, smooth scroll)
├── robots.txt          # Search engine crawler rules
├── sitemap.xml         # XML sitemap for indexing
├── CNAME               # GitHub Pages custom domain configuration
└── .github/workflows/  # CI/CD configuration
    └── static.yml      # Automated deployment to GitHub Pages
```

### Key Technical Details

1. **Deployment**: Automatic via GitHub Actions on every push to `main` branch
   - Uses `actions/deploy-pages@v4` to deploy to GitHub Pages
   - CNAME file ensures custom domain routing

2. **HTML Structure**:
   - Semantic HTML with proper metadata
   - Open Graph tags for social media sharing
   - JSON-LD structured data for search engines
   - Mobile-responsive viewport configuration
   - Proper language attribute (zh-TW for Traditional Chinese)

3. **CSS Architecture**:
   - Mobile-first responsive design
   - CSS Grid and Flexbox layouts
   - CSS Variables for theming
   - No preprocessors (vanilla CSS)

4. **JavaScript Functionality**:
   - Mobile hamburger menu toggle
   - Smooth scroll navigation
   - Simple, vanilla JavaScript (no frameworks)

## AdSense Configuration

The site includes the AdSense publisher ID in meta tag:
```html
<meta name="google-adsense-account" content="ca-pub-8905426307553442">
```

Critical requirements maintained:
- HTTPS enabled (GitHub Pages automatic)
- High-quality original content about I Ching philosophy
- Privacy policy and terms of service pages
- Clear site navigation
- Mobile-friendly responsive design
- robots.txt and sitemap.xml properly configured
- Meta tags and structured data for SEO

## Common Development Tasks

### Verify Domain Configuration
```bash
# Check DNS resolution
dig changes.live +short

# Verify HTTPS and HTTP status
curl -I https://changes.live

# Check robots.txt is accessible
curl https://changes.live/robots.txt

# Verify sitemap
curl https://changes.live/sitemap.xml
```

### Check Deployment Status
- Go to GitHub Actions tab in repository
- Latest workflow should show green checkmark (✅) when deployment is complete
- Typically takes 1-2 minutes after push

### Content Updates
1. Edit HTML files directly (index.html, privacy.html, terms.html)
2. Update sitemap.xml if adding new pages (modify `<url>` entries with proper `<loc>` values pointing to changes.live)
3. Update robots.txt if changing crawl rules
4. Commit and push to `main` branch
5. GitHub Actions automatically deploys to GitHub Pages

### SEO Maintenance
- Keep Open Graph meta tags updated in index.html head
- Maintain JSON-LD structured data accuracy
- Update sitemap.xml lastmod dates when content changes
- Ensure robots.txt Sitemap URL points to https://changes.live/sitemap.xml

## Important DNS/Domain Details

The site is configured with GitHub Pages using the CNAME file:
- **CNAME content**: `changes.live`
- **DNS must be configured** at domain registrar:
  - Either CNAME record pointing to GitHub username.github.io
  - Or A records pointing to GitHub Pages IP addresses (185.199.108.153, etc.)
- Without proper DNS setup, site won't be accessible at custom domain

## Content Guidelines

1. **No breaking changes to metadata**: Open Graph tags, JSON-LD, and robots rules are critical for search engines
2. **Maintain page structure**: Keep semantic HTML organization for accessibility
3. **Language**: Content is in Traditional Chinese (zh-TW)
4. **URLs in content**: Internal links should use https://changes.live (not iching.changes.live in meta tags)
5. **Ad placement**: The site is prepared for AdSense but no actual ad code is yet implemented

## Notes for Future Work

- The repository uses Traditional Chinese throughout. User's global CLAUDE.md specifies always responding in Traditional Chinese.
- This is a static site with no build process, database, or backend
- No environment variables or secrets needed
- The main focus is AdSense approval and SEO optimization
