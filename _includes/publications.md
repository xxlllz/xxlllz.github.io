<div class="publications">
<ul class="pub-list">
{% for link in site.data.publications.main %}
{%- if link.conference_short == "Technical Report" -%}{%- assign kind = "reports" -%}{%- else -%}{%- assign kind = "papers" -%}{%- endif -%}
{%- if kind == include.kind %}
<li>
  <p>
    <strong class="pub-title">{{ link.title }}</strong>
    {% if link.arxiv %}<a href="{{ link.arxiv }}" target="_blank">[arXiv]</a>{% endif %}
    {% if link.pdf %}<a href="{{ link.pdf }}" target="_blank">[PDF]</a>{% endif %}
    {% if link.code %}<a href="{{ link.code }}" target="_blank">[Code]</a>{% endif %}
    {% if link.blog %}<a href="{{ link.blog }}" target="_blank">[{{ link.blog_label | default: "Technical Blog" }}]</a>{% endif %}
    {% if link.page %}<a href="{{ link.page }}" target="_blank">[{{ link.page_label | default: "Project Page" }}]</a>{% endif %}
    {% if link.bibtex %}<a href="{{ link.bibtex }}" target="_blank">[BibTeX]</a>{% endif %}
    <br>
    <span class="pub-authors">{{ link.authors }}</span>
    {% if link.conference_short != "Technical Report" %}
    <br>
    <span class="pub-venue"><strong><em>{{ link.conference_short | default: link.conference }}</em></strong></span>
    {% endif %}
    {% if link.notes %}<strong class="pub-notes"><em>{{ link.notes }}</em></strong>{% endif %}
  </p>
</li>
{%- endif %}
{% endfor %}
</ul>
</div>
