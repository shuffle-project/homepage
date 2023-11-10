<header>
	<a href="/" class="logo">
		<img src="/icons/shuffle-logo.svg" alt="" aria-hidden="true" />
		<span class="shuffle-logo-text">SHUFFLE</span>
	</a>

    <ul>
        <li>
            <a href="/">Team</a>
        </li>
        <li>
            <a href="/">Aktuelles</a>
        </li>
        <li>
            <a href="/">Kontakt</a>
        </li>
        <li>
            <a href="/">Alle Publikationen</a>
        </li>
    </ul>
</header>

<style lang="scss">
    header {
        margin: var(--outer-spacing);

        display: flex;
        justify-content: space-between;

        .logo {
            display: flex;
            align-items: center;
            gap: 0.3125rem;

            text-decoration: none;
    
            &:hover {
                span {
                    text-decoration: underline;
                }
            }

            img {
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        ul {
            display: flex;
            align-items: center;
            gap: 1.25rem;

            list-style: none;
            padding: 0;

            a {
                font-weight: bold;
                color: var(--color-black);
                text-decoration: none;
            }
        }
    }
</style>